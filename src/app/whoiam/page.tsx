import { Typography } from "@/components/ui/typography";
import TextAnimate from "./TextAnimate";
import Image from "next/image";

export default function Whoiam() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white">
      <Typography variant="pagename" className="text-primary z-10">WHO I AM</Typography>
      <Image src="/images/whoiam.jpg" alt="emiliebernard" className="-mt-[60px] z-0" width="1920" height="980" />
      <TextAnimate />

      {/* SEWING Section */}
      <div className="w-full max-w-4xl px-4 py-8">
        <Typography variant="h1" className="text-primary mb-4">
          SEWING
        </Typography>
        <Typography className="text-primary mb-6">
          I started sewing in 2022. For my family, friends and me. I get my french NVQ (CAP) in both exam MMVF in 2023 and MMVT in 2024. I open my blog in start 2025.
        </Typography>
        <div className="grid grid-cols-3 gap-4 mb-8">
          <Image src="/images/sewing1.png" alt="Sewing creation 1" width={300} height={300} className="rounded-lg h-[300px] w-[300px]" />
          <Image src="/images/sewing2.png" alt="Sewing creation 2" width={300} height={300} className="rounded-lg h-[300px] w-[300px]" />
          <Image src="/images/sewing3.jpg" alt="Sewing creation 3" width={300} height={300} className="rounded-lg h-[300px] w-[300px]" />
        </div>
        <a href="https://instagram.com/atelier.ebee" className="text-primary hover:underline">More on Instagram</a>
        <a href="https://atelierebee.com" className="ml-6 text-primary hover:underline">Blog</a>
      </div>

      {/* TRANSLATION Section */}
      <div className="w-full max-w-4xl px-4 py-8 bg-gray-50">
        <Typography variant="h1" className="text-primary mb-4">
          TRANSLATION
        </Typography>
        <Typography className="text-primary mb-6">
          Since I was in Junior School I watch Asian Drama. In 2016 I started translating some of them from english to french on Rakuten Viki. Then I started being a French moderator who manage the french team.
        </Typography>
        <div className="grid grid-cols-3 gap-4 mb-8">
          <Image src="/images/drama1.png" alt="Drama 1" width={300} height={300} className="rounded-lg h-[300px] w-[300px]" />
          <Image src="/images/drama2.png" alt="Drama 2" width={300} height={300} className="rounded-lg h-[300px] w-[300px]" />
          <Image src="/images/drama3.png" alt="Drama 3" width={300} height={300} className="rounded-lg h-[300px] w-[300px]" />
        </div>
        <a href="https://www.viki.com/users/bearimnal/overview" className="text-primary hover:underline">View my Viki profile</a>
      </div>

      {/* READING Section */}
      <div className="w-full max-w-4xl px-4 py-8">
        <Typography variant="h1" className="text-primary mb-4">
          READING
        </Typography>
        <Typography className="text-primary mb-6">
          I am passionate about personal development and enjoy reading books on the subject to continuously improve myself. In 2020, I delved into numerous personal development books. I also have a keen interest in new romance novels and have a particular fondness for the thrillers of J.R. Dos Santos.
        </Typography>
        <div className="grid grid-cols-3 gap-4">
          <Image src="/images/book1.jpg" alt="Book 1" width={300} height={300} className="rounded-lg h-[300px] w-[300px]" />
          <Image src="/images/book2.jpg" alt="Book 2" width={300} height={300} className="rounded-lg h-[300px] w-[300px]" />
          <Image src="/images/book3.jpg" alt="Book 3" width={300} height={300} className="rounded-lg h-[300px] w-[300px]" />
        </div>
      </div>
    </main>
  );
}
