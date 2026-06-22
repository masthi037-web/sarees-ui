import { headers } from 'next/headers';
import { fetchCategories } from '@/services/product.service';
import { fetchCompanyDetails } from '@/services/company.service';
import CategoryClient from '@/components/category/CategoryClient';
import { resolveTenantConfig } from '@/config/tenant-config';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
    params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
    const resolvedParams = await params;
    const slug = resolvedParams.slug;

    if (!slug) {
        notFound();
    }

    const headersList = await headers();
    const headerDomain = headersList.get("x-company-domain");
    const companyDomain = (headerDomain && headerDomain !== 'localhost') ? headerDomain : 'tirumalasarees';

    const company = await fetchCompanyDetails(companyDomain);
    const tenantConfig = resolveTenantConfig(companyDomain);

    const categories = (company && company.companyId)
        ? await fetchCategories(company.companyId, company.deliveryBetween, tenantConfig.fetchAllAtOnce ?? true)
        : [];

    return (
        <div className="relative bg-background min-h-screen">
            <div className="absolute inset-0 bg-dot-grid pointer-events-none" />
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/3 blur-[120px] pointer-events-none" />
            <CategoryClient
                slug={slug}
                initialCategories={categories}
                companyDetails={company}
                fetchAllAtOnce={tenantConfig.fetchAllAtOnce ?? true}
            />
        </div>
    );
}
