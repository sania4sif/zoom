import react from 'react'

const page =() => {
  return (
    <div><figure className="md:flex bg-blue-300 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/IMG-20190716-WA0014.jpg" alt="" width="384" height="512">/  
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “Asslamoalaikum ,My name is Sania Asif am from rahim yar khan.
          My qualification is ADP computer science and am also teaching in school.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Sania Asif 
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Teacher+Student 
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page 