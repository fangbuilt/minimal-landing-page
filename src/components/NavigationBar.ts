export function NavigationBar(): string {
  const navItems = [
    {
      id: 1,
      path: "#",
      label: "Home",
    },
    {
      id: 2,
      path: "#",
      label: "Service",
    },
    {
      id: 3,
      path: "#",
      label: "Feature",
    },
    {
      id: 4,
      path: "#",
      label: "Product",
    },
    {
      id: 5,
      path: "#",
      label: "Testimonial",
    },
    {
      id: 6,
      path: "#",
      label: "FAQ",
    },
  ];
  return /*html*/ `
    <header class="flex justify-between p-6 items-center">
      <nav><a href="#" class="font-bold text-xl">Nexcent</a></nav>
      <nav class="absolute left-1/2 -translate-x-1/2">
        <ul class="flex gap-6">
          ${navItems.map((i) => /*html*/ `<li key=${i.id}><a href=${i.path}>${i.label}</a></li>`).join("")}
        </ul>
      </nav>
      <nav class="flex gap-6">
        <button
          type="button"
          class="cursor-pointer py-2 px-6 text-green-600 hover:text-green-700 hover:bg-gray-200 active:text-green-600 rounded-sm font-medium"
        >
          Login
        </button>
        <button
          type="button"
          class="cursor-pointer py-2 px-6 bg-green-600 hover:bg-green-700 active:bg-green-600 text-white rounded-sm"
        >
          Sign Up
        </button>
      </nav>
    </header>
    `;
}
