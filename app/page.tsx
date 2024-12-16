// import { auth } from "@/auth";
// import { redirect } from "next/navigation";
// import { User } from "@/models/userModel";
// import { connectToDatabase } from "@/lib/utils";
// import { Input } from "@/components/ui/input";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import AddLink from "@/components/client/AddLink";
// import Links from "@/components/Links";

// export interface LinkTypes {
//   title: string;
//   url: string;
//   _id: string;
//   show: Boolean;
// }

// export default async function Home() {
//   const session = await auth();
//   await connectToDatabase();
//   if (!session?.user) redirect("/login");
//   const userId = await User.findOne({ email: session?.user.email });

//   return (
//     <main className="p-4">
//       {/* top */}
//       <div className="my-5">
//         <h1 className="font-semibold text-2xl">Links</h1>
//       </div>
//       {/* Filter Sort */}
//       <div className="flex justify-between items-center">
//         {/* LEFT */}
//         <div>
//           {/* Filter */}
//           <DropdownMenu>
//             <DropdownMenuTrigger className="border border-slate-300 rounded-md px-4 py-2 outline-none">
//                 Filter
//             </DropdownMenuTrigger>
//             <DropdownMenuContent>
//               <DropdownMenuItem>Time</DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>Date</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//         {/* RIGHT */}
//         <div className="flex gap-4 mb-4">
//           <Input placeholder="Search ..." className="outline-none" />
//           <AddLink />
//         </div>
//       </div>
//       <hr />
//       {/* Main Links */}
//       <div className="flex flex-col mt-4">
//         {userId.Links.map((link: LinkTypes) => (
//           <Links id={link._id} url={link.url} show={link.show} key={link._id} />
//         ))}
//       </div>
//     </main>
//   );
// }
export default function page() {
  return (
    <div>
      <header className="w-full bg-white shadow">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-semibold">LinkTree</h1>
        <nav>
          <a href="#features" className="text-gray-700 hover:text-gray-900 px-4">
            Features
          </a>
          <a href="#signup" className="text-gray-700 hover:text-gray-900 px-4">
            Sign Up
          </a>
        </nav>
      </div>
    </header>
    <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Simplify Your Links</h2>
        <p className="text-lg mb-6">
          Share all your links in one place. Clean, minimal, and easy to use.
        </p>
        <a
          href="#signup"
          className="bg-white text-green-500 px-6 py-3 rounded-md shadow-md font-medium hover:bg-gray-100"
        >
          Get Started
        </a>
      </div>
    </section>
    <section id="features" className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-8">Why Choose LinkTree?</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            title="Easy Setup"
            description="Create your profile and add links within minutes."
          />
          <FeatureCard
            title="Customizable"
            description="Tailor the look to match your personal style."
          />
          <FeatureCard
            title="Analytics"
            description="Track link clicks and understand your audience."
          />
        </div>
      </div>
    </section>
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} LinkTree. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}
function FeatureCard({ title, description }: {
  title: string;
  description: string;}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}