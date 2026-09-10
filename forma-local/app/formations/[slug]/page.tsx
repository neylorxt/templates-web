import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CalendarDays,
  Check,
  Clock,
  GraduationCap,
  Info,
  MapPin,
  Phone,
  UserRound,
} from "lucide-react";
import { siteConfig, telLink, whatsappLink } from "@/config/site";
import { courses, getCourseBySlug } from "@/data/courses";
import { buttonClassName } from "@/components/Button";
import CourseModules from "@/components/CourseModules";

type Props = PageProps<"/formations/[slug]">;

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: "Formation introuvable" };

  const title = `${course.title} | ${course.duration}`;
  return {
    title: course.title,
    description: course.shortDescription,
    openGraph: {
      title,
      description: course.shortDescription,
      url: `${siteConfig.baseUrl}/formations/${course.slug}`,
      type: "article",
      images: [{ url: course.image }],
    },
    alternates: {
      canonical: `/formations/${course.slug}`,
    },
  };
}

function courseJsonLd(course: NonNullable<ReturnType<typeof getCourseBySlug>>) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.shortDescription,
    image: course.image,
    provider: {
      "@type": "EducationalOrganization",
      name: siteConfig.name,
      url: siteConfig.baseUrl,
    },
    offers: course.price
      ? {
          "@type": "Offer",
          price: course.price,
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock",
        }
      : undefined,
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode:
        course.format === "en ligne" ? "online" : "onsite",
      courseWorkload: course.duration,
      location: {
        "@type": "Place",
        address: `${siteConfig.contact.address}, ${siteConfig.contact.postalCode} ${siteConfig.contact.city}`,
      },
    },
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const whatsappCourseMessage = `Bonjour, je souhaiterais avoir plus d'informations sur la formation ${course.title}.`;

  return (
    <>
      <section className="border-b border-zinc-200 bg-mist">
        <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
          <nav aria-label="Fil d'Ariane">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-zinc-500">
              <li>
                <Link href="/" className="transition-colors hover:text-brand-700">
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  href="/formations"
                  className="transition-colors hover:text-brand-700"
                >
                  Formations
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-medium text-zinc-800">
                {course.title}
              </li>
            </ol>
          </nav>

          <div className="mt-8 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand-600">
                {course.category}
              </p>
              <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {course.title}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-zinc-600">
                {course.shortDescription}
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                  <dt className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                    Durée
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-ink">
                    {course.duration}
                  </dd>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                  <dt className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
                    <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
                    Niveau
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-ink">
                    {course.level}
                  </dd>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                  <dt className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                    Format
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-ink">
                    {course.format}
                  </dd>
                </div>
                {course.startDate ? (
                  <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                    <dt className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
                      <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                      Prochaine session
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-ink">
                      {course.startDate}
                    </dd>
                  </div>
                ) : null}
                {course.availablePlaces ? (
                  <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                    <dt className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
                      <UserRound className="h-3.5 w-3.5" aria-hidden="true" />
                      Places
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-ink">
                      {course.availablePlaces} places
                    </dd>
                  </div>
                ) : null}
                <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                  <dt className="flex items-center gap-1.5 text-xs font-medium text-zinc-500">
                    <Info className="h-3.5 w-3.5" aria-hidden="true" />
                    Tarif
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-ink">
                    {course.price ? `${course.price} €` : "Sur demande"}
                  </dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/#inscription"
                  className={`${buttonClassName("primary", "lg")} flex-1`}
                >
                  S&apos;inscrire à cette formation
                </Link>
                <Link
                  href="/#contact"
                  className={`${buttonClassName("secondary", "lg")} flex-1`}
                >
                  Demander des informations
                </Link>
              </div>
              <a
                href={telLink()}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-brand-700"
              >
                <Phone className="h-4 w-4 text-brand-600" aria-hidden="true" />
                Ou appelez le {siteConfig.contact.phoneDisplay}
              </a>
            </div>

            <div className="overflow-hidden rounded-[2rem] shadow-xl shadow-brand-900/10">
              <Image
                src={course.image}
                alt={`Formation ${course.title}`}
                width={1200}
                height={900}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[4/3] w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            <div className="space-y-10 lg:col-span-2">
              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                  Présentation
                </h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-zinc-600">
                  {course.description.split("\n\n").map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">
                  Programme détaillé
                </h2>
                <p className="mt-2 text-sm text-zinc-600">
                  {course.duration}, en {course.format}, découpée en modules
                  progressifs.
                </p>
                <div className="mt-6">
                  <CourseModules modules={course.modules} />
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="rounded-3xl border border-zinc-200 bg-mist p-6 sm:p-8">
                <h2 className="font-display text-xl font-semibold text-ink">
                  Objectifs de la formation
                </h2>
                <ul className="mt-4 space-y-3">
                  {course.objectives?.map((objective) => (
                    <li
                      key={objective}
                      className="flex items-start gap-2.5 text-sm text-zinc-700"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                        aria-hidden="true"
                      />
                      {objective}
                    </li>
                  ))}
                </ul>
              </div>

              {course.prerequisites?.length ? (
                <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8">
                  <h2 className="font-display text-xl font-semibold text-ink">
                    Prérequis
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {course.prerequisites.map((prerequisite) => (
                      <li
                        key={prerequisite}
                        className="flex items-start gap-2.5 text-sm text-zinc-700"
                      >
                        <Info
                          className="mt-0.5 h-4 w-4 shrink-0 text-brand-600"
                          aria-hidden="true"
                        />
                        {prerequisite}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {course.audience ? (
                <div className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8">
                  <h2 className="font-display text-xl font-semibold text-ink">
                    Public concerné
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {course.audience}
                  </p>
                </div>
              ) : null}

              <div className="rounded-3xl border border-brand-100 bg-brand-50 p-6 sm:p-8">
                <h2 className="font-display text-xl font-semibold text-ink">
                  Prêt à vous lancer ?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  Une question sur cette formation ? Parlez-en directement avec
                  notre équipe.
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <Link
                    href="/#inscription"
                    className={`${buttonClassName("primary", "md")} w-full`}
                  >
                    S&apos;inscrire
                  </Link>
                  <a
                    href={whatsappLink(whatsappCourseMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${buttonClassName("secondary", "md")} w-full`}
                  >
                    Poser une question
                  </a>
                </div>
              </div>
            </aside>
          </div>

          <div className="mt-16">
            <Link
              href="/formations"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-700 transition-colors hover:text-brand-800"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Retour à toutes les formations
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd(course)) }}
      />
    </>
  );
}