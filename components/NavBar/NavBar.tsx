

function NavBar() {
  return (
    <nav className="h-[30px] mb-5 p-4 xl:h-auto grid grid-cols-2  ">
    <div>
      {" "}
     <p className="text-white"> betterhalf.ai</p>
    </div>

    <div className="grid justify-items-end">
    <div className="flex justify-center">
<div>
  <div className="dropdown relative">
    <button
      className="
        dropdown-toggle
        px-6
        py-2.5
        text-white
        font-medium
        text-xs
        leading-tight
        uppercase
        rounded
        shadow-md
        bg-[#f7b9a8] hover:bg-[#ff9f85] hover:shadow-lg
        focus:bg-[#ff9f85]focus:shadow-lg focus:outline-none focus:ring-0
        active:bg-[#f7b9a8] active:shadow-lg active:text-white
        transition
        duration-150
        ease-in-out
        flex
        items-center
        whitespace-nowrap
      "
      type="button"
      id="dropdownMenuButton1"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      My Account
      <svg
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="caret-down"
        className="w-2 ml-2"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
      >
        <path
          fill="currentColor"
          d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
        ></path>
      </svg>
    </button>
    <ul
      className="
        dropdown-menu
        min-w-max
        absolute
        bg-white
        text-base
        z-50
        float-left
        py-2
        list-none
        text-left
        rounded-lg
        shadow-lg
        mt-1
        hidden
        m-0
        bg-clip-padding
        border-none
      "
      aria-labelledby="dropdownMenuButton1"
    >
      <li>
        <a
          className="
            dropdown-item
            text-sm
            py-2
            px-10
            font-normal
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          "
          href="#"
          >Login</a>
      </li>
      <li>
        <a
          className="
            dropdown-item
            text-sm
            py-2
            px-10
            font-normal
            block
            w-full
            whitespace-nowrap
            bg-transparent
            text-gray-700
            hover:bg-gray-100
          "
          href="#"
          >SignUp</a >
      </li>
    </ul>
  </div>
</div>
</div>
    </div>
  </nav>
  )
}

export default NavBar