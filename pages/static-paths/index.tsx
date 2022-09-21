import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';

interface Post {
  title: string,
  description: string
}

const ServerSideProps = ({ posts }: {posts: any }) => {
  return (
    <div className="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Recent posts from S20 (Static Paths)</h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Posts from S20 devs
          </p>
        </div>
        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {posts?.map((post: any) => (
            <div key={post.title}>
              <Link href={`/static-paths/${post._id}`} className="mt-4 block">
                <div>
                  <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                  <p className="mt-3 text-base text-gray-500">{post.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  let posts = null;

  await fetch(`https://next-api-lihao-ng.vercel.app/api/posts?search=`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'api_key': '849c4bdfa5613afea6fdea06'
      },
    })
    .then(async (res: any) => {
      if (!res.ok) {
        return Promise.reject(res);
      }

      let result = await res.json();

      posts = result.data;
    })
    .catch((error) => {
      console.log('err', error)
      return error.text().then((error: any) => { console.log('errpr', error) })
      // error.text().then((text: any) => console.log('err', text));
    });

  return {
    props: {
      posts: posts
    }
  }
}

export default ServerSideProps;