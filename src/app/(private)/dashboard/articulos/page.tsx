"use client"
import { useState, ChangeEvent, FormEvent } from 'react';
import { redirect } from 'next/navigation'
import { postArticle } from '@/shared/services/article.services';
import Editor from '@/app/(private)/dashboard/components/MDXeditor';

function AddArticle() {
  const [markdown, setMarkdown] = useState('');
  const [formData, setFormData] = useState<IArticlePost>({
    title: '',
    content: '',
    description: '',
    keywords: '',
    articleState: 'review',
    articleType: 'notice',
    systemUserId: 2,
    createAt: new Date().toISOString()
  });
  console.log(formData)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log( { name, value })
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      formData.content = markdown;
      const result = await postArticle(formData);
      console.log(result)
    } catch (error) {
      console.error('Error al procesar la solicitud:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Crear un nuevo artículo</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">
            Título del artículo:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <Editor setMdxContent={setMarkdown} />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">
            Descripción del artículo:
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Guardar artículo
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddArticle