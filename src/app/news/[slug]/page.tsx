import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { news, getPost } from "@/data/news";
import { NewsCard } from "@/components/NewsCard";
import { MagneticButton } from "@/components/MagneticButton";
import { site } from "@/data/site";

export function generateStaticParams() {
  return news.map((n) => ({ slug: n.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "Article not found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: [{ url: post.cover }],
    },
  };
}

export default function NewsArticle({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const more = news.filter((n) => n.slug !== post.slug).slice(0, 3);
  const date = new Date(post.date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    image: post.cover,
    datePublished: post.date,
    description: post.excerpt,
    publisher: { "@type": "Organization", name: site.name },
  };

  return (
    <article className="pt-[72px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* Cover */}
      <div className="relative h-[44vh] min-h-[320px] w-full overflow-hidden">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-ink-950/20" />
      </div>

      <div className="container-px -mt-24 relative z-10">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition-colors hover:text-volt"
          >
            <ArrowLeft className="h-4 w-4" /> Back to news
          </Link>

          <span className="mt-5 inline-block rounded-full bg-volt/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-volt">
            {post.kind}
          </span>

          <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>

          <div className="mt-5 flex items-center gap-5 text-sm text-white/50">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" /> {date}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" /> {post.readingTime} min read
            </span>
          </div>

          <div className="mt-9 space-y-5 text-lg leading-relaxed text-white/75">
            {post.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start gap-5 rounded-4xl border border-white/10 bg-white/[0.03] p-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">
                Interested? Let&apos;s talk.
              </h3>
              <p className="mt-1 text-sm text-white/55">
                Book a test ride or speak with an advisor today.
              </p>
            </div>
            <MagneticButton href="/contact">Book a Test Ride</MagneticButton>
          </div>
        </div>
      </div>

      {/* More */}
      <section className="py-20">
        <div className="container-px">
          <h2 className="mb-8 text-2xl font-extrabold text-white">
            More from the newsroom
          </h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {more.map((p) => (
              <NewsCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
