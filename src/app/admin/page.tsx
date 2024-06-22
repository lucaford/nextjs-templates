"use client";

import { useState, useEffect } from "react";
import NestedFormFields from "@/components/admin/NestedFormFields";
import componentMap from "@/helpers/componentes-mapping";
import ColorSetter from "@/components/admin/ColorSetter";

const EditI18nPage = () => {
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch("/api/i18n")
      .then((res) => res.json())
      .then((data) => {
        setTranslations(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching content:", error);
        setLoading(false);
      });
  }, []);

  const handleChange = (path: string, value: any) => {
    setTranslations((prevTranslations) => {
      const updatedTranslations = { ...prevTranslations };
      const keys = path.split(".");
      let current = updatedTranslations;

      keys.forEach((key, index) => {
        if (index === keys.length - 1) {
          current[key] = value;
        } else {
          current = current[key];
        }
      });

      return updatedTranslations;
    });
  };

  const handleSave = () => {
    setSaving(true);
    fetch("/api/i18n", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(translations),
    })
      .then((res) => res.json())
      .then((data) => {
        window.location.reload();
        setSaving(false);
      })
      .catch((error) => {
        console.error("Error saving content:", error);
        setSaving(false);
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex mt-5 py-5">
      <div className="w-1/2 p-5 bg-white shadow-md rounded-lg">
        <h1 className="text-4xl text-black font-bold mb-5 text-center">
          Edit configuration file
        </h1>
        <ColorSetter/>
        <NestedFormFields data={translations} onChange={handleChange} />
        <div className="flex justify-center mt-5">
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={saving}
          >
            {saving ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
      <div className="w-1/2 px-5 shadow-md rounded-lg">
        {Object.keys(translations).map((key) => {
          const Component = componentMap[key];
          return Component ? (
            <div key={key} className="mb-2">
              <Component {...translations[key]} />
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default EditI18nPage;
