import { NewTag as UINewTag } from "~/ui/components/new-tag";
import { dateDiffInDays } from "~/utils/date-diff-in-days";

interface NewTagProps {
  postedAt?: string;
}

const MAX_DAYS_TO_BE_NEW = 30;

function isNew(postedAt?: string) {
  if (!postedAt) {
    return false;
  }

  const diffInDays = dateDiffInDays(new Date(postedAt));

  return diffInDays <= MAX_DAYS_TO_BE_NEW;
}

export function NewTag({ postedAt }: NewTagProps) {
  return isNew(postedAt) ? <UINewTag className="ml-1 -mt-2" /> : null;
}
