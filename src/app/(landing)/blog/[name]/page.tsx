
import { getArticleByName } from '@/shared/services/article.services'
import Markdown from 'markdown-to-jsx';
import { Code } from '@/shared/components/'


async function BlogView ({ params }: { params: { name: string } }) {
    const response = await getArticleByName(params.name)
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