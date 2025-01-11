export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-red-500">
        关于我们
      </h1>
      <div className="prose max-w-none">
        <p className="text-gray-600 mb-4">
          我们是一个充满激情的团队，致力于为用户提供最好的服务。
        </p>
        <p className="text-gray-600">
          如果您有任何问题或建议，欢迎随时与我们联系。
        </p>
      </div>
    </div>
  )
}
