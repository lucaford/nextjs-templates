"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { ShoppingBag, ArrowRight, Star, Zap, Shield } from "lucide-react";

export default function LandingPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const { scrollYProgress } = useScroll();
  const images = [
    "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1399&q=80",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImage}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={images[currentImage]}
              alt="Background"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </motion.div>
        </AnimatePresence>
        <div className="container mx-auto px-4 z-10 text-white text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Descubre la Elegancia
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Productos exclusivos que definen tu estilo
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" variant="secondary" className="group text-lg">
              Explora la Colección
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-indigo-100 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        ></motion.div>
      </section>

      {/* Características Section */}
      <section className="py-20 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)",
            rotate: useTransform(scrollYProgress, [0, 1], [0, 360]),
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.5]),
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Por qué somos únicos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Star,
                title: "Calidad Suprema",
                desc: "Materiales premium en cada producto",
              },
              {
                icon: Zap,
                title: "Diseño Innovador",
                desc: "Creaciones que marcan tendencia",
              },
              {
                icon: Shield,
                title: "Garantía Total",
                desc: "Tu satisfacción es nuestra prioridad",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-2xl shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <feature.icon className="w-16 h-16 text-purple-600 mx-auto mb-6" />
                </motion.div>
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Productos Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500 to-pink-500 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
            x: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
            y: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Nuestros Productos Estrella
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "Reloj Quantum",
                img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1399&q=80",
              },
              {
                name: "Auriculares Nova",
                img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              },
              {
                name: "Cámara Retro X",
                img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-2xl overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <Image
                    src={product.img}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </motion.div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">
                    {product.name}
                  </h3>
                  <Button variant="outline" className="w-full group">
                    Descubre más
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            background: "linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)",
            scale: useTransform(scrollYProgress, [0, 1], [1, 1.5]),
            rotate: useTransform(scrollYProgress, [0, 1], [0, 45]),
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl p-12"
          >
            <motion.h2
              className="text-4xl font-bold mb-6"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 5 }}
            >
              Eleva tu Estilo Hoy
            </motion.h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Descubre nuestra colección exclusiva y transforma tu vida con
              productos que combinan elegancia y funcionalidad.
            </p>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                size="lg"
                className="group text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
              >
                Comprar Ahora
                <ShoppingBag className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-8 md:mb-0">
              <motion.h3
                className="text-2xl font-bold mb-4"
                animate={{ color: ["#fff", "#f0f", "#0ff", "#fff"] }}
                transition={{ repeat: Infinity, duration: 5 }}
              >
                TuMarca
              </motion.h3>
              <p className="text-gray-400">
                Elevando el estilo, un producto a la vez.
              </p>
            </div>
            <div className="flex space-x-8">
              <motion.a
                href="#"
                className="hover:text-purple-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Sobre Nosotros
              </motion.a>
              <motion.a
                href="#"
                className="hover:text-purple-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Productos
              </motion.a>
              <motion.a
                href="#"
                className="hover:text-purple-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Contacto
              </motion.a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2023 TuMarca. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
