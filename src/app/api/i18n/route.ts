import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const locale = 'es';
const i18nPath = path.join(process.cwd(), `${locale}.json`);


export async function GET() {
  try {
    const content = await fs.promises.readFile(i18nPath, 'utf8');
    // Extract the JSON part from the file content
    if (!content) {
      throw new Error('Invalid i18n file format');
    }
    return NextResponse.json(JSON.parse(content));
  } catch (err) {
    return NextResponse.json({ error: 'Failed to read file' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const updatedTranslations = await request.json();
    const fileContent = `${JSON.stringify(updatedTranslations, null, 2)}`;
    await fs.promises.writeFile(i18nPath, fileContent, 'utf8');
    return NextResponse.json({ message: 'File updated successfully' });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to write file' }, { status: 500 });
  }
}

