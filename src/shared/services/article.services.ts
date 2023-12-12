const baseURL = "https://lab-platform-back.onrender.com/api"
  export async function getArticle(): Promise<ResponseProv<IArticleBase[]>> {
    try {
      const response = await fetch(`${baseURL}/article/all/notice`);
      const result: ResponseProv<IArticleBase[]>= await response.json();
      return result;
    } catch (error) {
      // Manejo de errores
      console.error('Error al obtener los datos:', error);
      throw error; // Lanzar el error nuevamente para manejarlo en el componente
    }
  }
  
  export async function getArticleByName(name: string): Promise<ResponseProv<IArticleComplete> | null> {
    try {
      const response = await fetch(`${baseURL}/article/one/${name}`);
      const result: ResponseProv<IArticleComplete> | null = await response.json();
      return result;
    } catch (error) {
      // Manejo de errores
      console.error('Error al obtener los datos:', error);
      throw error; // Lanzar el error nuevamente para manejarlo en el componente
    }
  }
  
  export async function postArticle(body: IArticlePost): Promise<IArticleComplete | undefined> {
    try {
      const url = "https://lab-platform-back.onrender.com/api"
      console.log(url)
      const response = await fetch(`${url}/article`, {
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
  