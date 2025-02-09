import { title } from "@/components/primitives";
import { SearchIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { Input } from "@heroui/input";
import { Kbd } from "@heroui/kbd";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Find your&nbsp;</span>
          <span className={title({ color: "violet" })}>Waifu&nbsp;</span>
          <br />
          <br />
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-default-100",
              input: "text-sm",
            }}
            endContent={
              <Kbd className="hidden lg:inline-block" keys={["ctrl"]}>
                K
              </Kbd>
            }
            labelPlacement="outside"
            placeholder="Search..."
            startContent={
              <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
            }
            type="search"
          />
        </div>
      </section>
    </DefaultLayout>
  );
}
