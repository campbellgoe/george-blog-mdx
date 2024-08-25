import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Blog
      </h1>
      <p className="mb-4">
        {`I'm a web engineer, skilled in HTML, CSS, JavaScript, React, Next.js, Three.js, R3F, and many other technologies. `}
      </p>
      <p className="mb-4">
        {`I'm learning Rust and Python.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
