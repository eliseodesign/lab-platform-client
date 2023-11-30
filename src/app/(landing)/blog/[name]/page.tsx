
import { getArticleByName } from '@/shared/services/article.services'
import Markdown from 'markdown-to-jsx';
import { Code } from '@/shared/components/'


export const BlogView = async ({ params }: { params: { name: string } }) => {

    console.log("params", params)
    const response = await getArticleByName(params.name)
    console.log(response)
    const blogContent = response?.data.content || "# Se produjo un error"

    return (
        <div className="container">
            <div className="markdown-content prose">
                <Markdown
                    options={{
                        overrides: {
                            code: {
                                component: Code,
                            },
                        },
                    }}
                >
                    {blogContent}
                </Markdown>
            </div>
        </div>
    );
};

export default BlogView