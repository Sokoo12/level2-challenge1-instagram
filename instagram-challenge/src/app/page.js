import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white h-full w-full flex flex-col justify-center items-center">
      <div className="h-full flex justify-center items-center gap-8">
      {/* zurag */}
        <div className=""> 
          <Image src="/instagram.png" height={581} width={380} alt="picture" className="shrink-0"/>
        </div>
      {/* form */}
        <div className="flex flex-col">
          <div className="bg-white border border-gray-300 flex flex-col justify-center items-center p-10 mb-2">
            <div className="mb-8">
                <Image src="/ig.png" height={51} width={175} alt="logo"/>
              </div>
            <input placeholder="Phone number, username, or email" className="w-[268px] h-[38px] bg-gray-100 border border-gray-300 p-2 text-xs rounded-[3px] mb-2 text-black"/>
            <input placeholder="Password" className="w-[268px] h-[38px] bg-gray-100 border border-gray-300 p-2 text-xs rounded-[3px] mb-4 text-black"/>
            {/* button */}
            <button className="w-full bg-[#4CB5F9] rounded-lg py-[6px] text-sm mb-4 mx-2">Log in</button>
            {/* OR */}
            <div className="w-full flex justify-center items-center gap-5 mb-6">
              <span className="w-full bg-gray-300 h-[1px] "/>
              <span className="text-gray-500">OR
              </span>
              <span className="w-full bg-gray-300 h-[1px]"/>
            </div>
            {/* Login facebook link */}
            <Link href="https://www.facebook.com/" className="text-[#385185] text-sm font-semibold">
              <div className="flex gap-1 justify-center items-center mb-4">
                <img src="/facebook.png" alt="facebook logo" />
                <span>Log in with Facebook</span>
               </div> 
            </Link>
            {/* Forgot password */}
            <Link href="https://www.facebook.com/" className="text-[#00376B] text-sm">
              Forgot Password?
            </Link>
          </div>
          {/* dragin form */}
          <div className="bg-white border border-gray-300 flex justify-center items-center p-6 gap-1 mb-4"> 
            <div className="text-black">
            Don't have an account?
            </div>
            <Link href="" className="text-[#4CB5F9]">
            Sign up
            </Link>
          </div>
          <div className="text-black text-center mb-4">
            Get the app.
          </div>
          <div className="flex gap-1">
            <img src="/appstore.png" alt="appstore"/>
            <img src="/googleplay.png" alt="googleplay"/>
          </div>
        </div>
      </div>

        {/* footer section */}
        <div className="flex flex-col mb-14">
          {/* deed heseg */}
          <div className="flex justify-center items-center gap-4 text-gray-600 text-xs">
          <Link href="https://about.meta.com/" className="hover:underline">Meta</Link>
          <Link href="https://about.instagram.com/" className="hover:underline">About</Link>
          <Link href="https://about.instagram.com/blog" className="hover:underline">Blog</Link>
          <Link href="https://about.instagram.com/about-us/careers" className="hover:underline">Jobs</Link>
          <Link href="https://help.instagram.com/" className="hover:underline">Help</Link>
          <Link href="https://developers.facebook.com/docs/instagram-platform" className="hover:underline">API</Link>
          <Link href="https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect">Privacy</Link>
          <Link href="https://www.instagram.com/privacy/cookie_settings/" className="hover:underline">Cookie Settings</Link>
          <Link href="https://help.instagram.com/581066165581870/">Terms</Link>
          <Link href="https://www.instagram.com/explore/locations/">Locations</Link>
          <Link href="https://www.instagram.com/web/lite/">Instagram Lite</Link>
          <Link href="https://www.threads.net/" className="hover:underline">Threads</Link>
          <Link href="https://www.facebook.com/help/instagram/261704639352628">Contact Uploading&Non-Users</Link>
          <Link href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fmeta_verified%2F%3Fentrypoint%3Dweb_footer%26__coig_login%3D1">Meta Verified</Link>
          </div>
        <div className="flex justify-center items-center text-xs gap-3 text-gray-600 mt-4">
          <button className="flex justify-center items-center">English <ChevronDown strokeWidth={1} color="#4B5563"/></button>
          <span>© 2024 Instagram from Meta</span>
        </div>
         
        </div>
    </main>
  );
}
