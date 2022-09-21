import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';

interface Post {
  title: string,
  description: string
}

const ServerSideProps = ({ post }: {post: any }) => {
  return (
    <div className="bg-white px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{post.title}</h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
          {post.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async (context) => {
  let posts: any = null;
  let paths: any[] = [];

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

      paths = posts?.map((post: any) => {
        return {
          params: { id: post?._id.toString() }
        }
      })
    })
    .catch((error) => {
      console.log('err', error)
      return error.text().then((error: any) => { console.log('errpr', error) })
      // error.text().then((text: any) => console.log('err', text));
    });


  return {
    paths: paths,
    fallback: false, // can also be true or 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context?.params?.id;
  let post = null;

  await fetch(`https://next-api-lihao-ng.vercel.app/api/posts/${id}`, {
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

      post = result.data;
    })
    .catch((error) => {
      console.log('err', error)
      return error.text().then((error: any) => { console.log('errpr', error) })
      // error.text().then((text: any) => console.log('err', text));
    });

  return {
    props: {
      post: post
    },
    revalidate: 10
  }
}

export default ServerSideProps;