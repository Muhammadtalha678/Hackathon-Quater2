import React, { useEffect, useState } from 'react'
import {useRouter} from 'next/navigation'
// import Form from 'next/form'
const SearchCompo = () => {
    const router = useRouter()
    const [searchQuery,setSearchQuery] = useState<string>('')
//     const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   if (!searchQuery.trim()) return; // This will ignore empty or just whitespace queries
// }
useEffect(() => {
    const timer = setTimeout(() => {
        if (searchQuery) {
            
            router.push(`/search?q=${searchQuery.trim()}`);   
            }
    }, 500);
        return () => clearTimeout(timer)
    },[searchQuery])

  return (
      <form
        // onSubmit={handleSearchSubmit}
        className="w-full flex px-4 py-2 bg-[#F0F2F3]"
      >
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for products..."
          className="flex-1 h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#007580] bg-white text-sm"
        />
       
        </form>
    //   <Form action={'/search'}
    //     // onSubmit={handleSearchSubmit}
    //     className="w-full flex px-4 py-2 bg-[#F0F2F3]"
    //   >
    //     <input
    //           type="text"
    //           name='q'
    //     //   value={searchQuery}
    //     //   onChange={(e) => setSearchQuery(e.target.value)}
    //       placeholder="Search for products..."
    //       className="flex-1 h-12 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#007580] bg-white text-sm"
    //     />
    //     <button
    //       type="submit"
    //       className="h-12 px-6 ml-2 rounded-lg bg-[#007580] text-white text-sm hover:bg-[#005f66]"
    //     >
    //       Search
    //     </button>
    //   </Form>
  )
}

export default SearchCompo
