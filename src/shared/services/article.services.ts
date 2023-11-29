
  export async function getArticle(): Promise<ResponseProv<IArticleBase[]>> {
    try {
      const response = await fetch("https://lab-platform-back.onrender.com/api/article/all/notice");
      const result: ResponseProv<IArticleBase[]>= await response.json();
      return result;
    } catch (error) {
      // Manejo de errores
      console.error('Error al obtener los datos:', error);
      throw error; // Lanzar el error nuevamente para manejarlo en el componente
    }
  }
  
  export async function getBlogById(id: number): Promise<IArticleComplete | null> {
    try {
      const response = await fetch(`api/article/notice/${id}`);
      const result: IArticleComplete | null = await response.json();
      return result;
    } catch (error) {
      // Manejo de errores
      console.error('Error al obtener los datos:', error);
      throw error; // Lanzar el error nuevamente para manejarlo en el componente
    }
  }
  
  export async function postArticle(body: IArticleComplete): Promise<IArticleComplete | undefined> {
    try {
      const response = await fetch("api/article", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
  
      const data: IArticleComplete | undefined = await response.json();
      return data;
    } catch (error) {
      // Manejar el error de la petición
      console.error(error);
    }
  }
  