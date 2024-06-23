import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const imagesPath = path.join(process.cwd(), 'images.json');


export async function GET() {
  try {
    const content = await fs.promises.readFile(imagesPath, 'utf8');
    
    // Extract the JSON part from the file content
    if (!content) {
      throw new Error('Invalid i18n file format');
    }

    // parse the JSON content and return it
    const jsonContent = JSON.parse(content);
    return NextResponse.json(jsonContent);
  }

    catch (err) {
        return NextResponse.json({ error: 'Failed to read file' }, { status: 500 });
    }

}

export async function POST(request: Request) {
    try {
      const updatedImages = await request.json();
      const fileContent = `${JSON.stringify(updatedImages, null, 2)}`;
      await fs.promises.writeFile(imagesPath, fileContent, 'utf8');
      return NextResponse.json({ message: 'File updated successfully' });
    } catch (err) {
      return NextResponse.json({ error: 'Failed to write file' }, { status: 500 });
    }
  }
  