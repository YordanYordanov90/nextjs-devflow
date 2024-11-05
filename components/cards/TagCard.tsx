import Link from "next/link";

import ROUTES from "@/constants/routes";
import { getDeviconClassName } from "@/lib/utils";

import { Badge } from "../ui/badge";

type Props = {
  _id: string;
  name: string;
  questions: number;
  showCount?: boolean;
  compact?: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TagCard = ({ _id, name, questions, showCount, compact }: Props) => {
  const iconName = getDeviconClassName(name);
  return (
    <Link
      href={ROUTES.TAGS(_id)}
      className="flex cursor-pointer items-center justify-between gap-3"
    >
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase ">
        <div className="flex items-center gap-2">
          <i className={`${iconName} text-sm`}></i>
          <span>{name}</span>
        </div>
      </Badge>
      {showCount && (
        <span className="small-medium text-dark500_light700">{questions}</span>
      )}
    </Link>
  );
};

export default TagCard;
