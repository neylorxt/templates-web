import { Accordion } from "@heroui/react";
import { ChevronDown } from "lucide-react";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqProps = {
  items: FaqItem[];
  indicatorClassName?: string;
};

export function Faq({ items, indicatorClassName = "text-zinc-500" }: FaqProps) {
  return (
    <Accordion variant="surface" className="w-full">
      {items.map((item, index) => (
        <Accordion.Item key={item.question} id={index}>
          <Accordion.Heading>
            <Accordion.Trigger className="text-sm font-medium">
              {item.question}
              <Accordion.Indicator>
                <ChevronDown className={`size-4 ${indicatorClassName}`} />
              </Accordion.Indicator>
            </Accordion.Trigger>
          </Accordion.Heading>
          <Accordion.Panel>
            <Accordion.Body className="text-sm leading-relaxed text-zinc-400">
              {item.answer}
            </Accordion.Body>
          </Accordion.Panel>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
