import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadCrumb = ({ link }: { link: string[] }) => {
  return (
     <Breadcrumb>
      {link.map((item, index) => (
        <BreadcrumbItem key={index}>
          {index > 0 && <BreadcrumbSeparator />} {/* Add separator after the first item */}
          {index === link.length - 1 ? (
            <BreadcrumbPage>{item}</BreadcrumbPage> // Last item is plain text (not clickable)
          ) : (
            <BreadcrumbLink href={`/${link.slice(0, index + 1).join("/")}`}>
              {item}
            </BreadcrumbLink> // All other items are clickable links
          )}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

export default BreadCrumb;
