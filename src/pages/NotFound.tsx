import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="mb-4">抱歉，您访问的页面不存在</p>
      <Link
        to="/"
        className="text-blue-500 hover:text-blue-700 underline"
      >
        返回首页
      </Link>
    </div>
  )
}
