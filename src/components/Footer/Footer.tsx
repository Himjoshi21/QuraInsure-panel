import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white/70 pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logos/White Primary Logo.svg"
                alt="Qura Insure Logo"
                width={140}
                height={40}
                className="h-8 w-auto"
                style={{ width: "auto" }}
              />
            </Link>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Simplifying insurance for everyone. Expert advice, zero spam, and lifetime claims support.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center text-white/70 hover:bg-accent hover:text-white transition-colors">
                <span>X</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center text-white/70 hover:bg-accent hover:text-white transition-colors">
                <span>In</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center text-white/70 hover:bg-accent hover:text-white transition-colors">
                <span>Ig</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Products</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Term Life Insurance</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Health Insurance</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Corporate Plans</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} Qura Insure. All rights reserved.</p>
          <p>
            Qura Insure is a registered trademark. Insurance is the subject matter of solicitation.
          </p>
        </div>
      </div>
    </footer>
  );
}
