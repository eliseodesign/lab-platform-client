import React from 'react';
import { Card } from '@/shared/components';
import { getArticle } from '@/shared/services/article.services';


async function Blog() {

    const response = await getArticle();

  return (
    <section className='pt-[100px]'>
      <div className='mb-3'>
        <h1 className='text-5xl text-center'>Blog</h1>
      </div>

      <div className='container-cards'>
        {response && response.data.map((notice) => (
          <Card 
          key={notice.id} 
          title={notice.title} 
          description={notice.description} 
          user={`${notice.systemUser.firstName} ${notice.systemUser.lastName}`} />
        ))}
      </div>
    </section>
  );
};

export default Blog