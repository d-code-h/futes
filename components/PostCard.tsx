import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { ChevronRight } from 'lucide-react';

interface Props {
  data: {
    src: string;
    title: string;
    description: string;
    btn?: {
      text: string;
      href: string;
    };
  };
}

const PostCard = ({ data }: Props) => {
  return (
    <Card className="p-0 w-full text-center">
      <Image
        src={data.src}
        alt={data.title}
        width={500}
        height={350}
        className="w-full h-full"
      />
      <div className="pt-5 mb-8 space-y-5">
        <CardHeader>
          <CardTitle className="text-xl  uppercase">{data.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">{data.description}</p>
        </CardContent>
        <CardFooter>
          {data?.btn && (
            <Button className="mx-auto text-md py-5 uppercase">
              <Link className="flex items-center gap-1" href={data.btn.href}>
                <span>{data.btn?.text}</span>

                <ChevronRight />
              </Link>
            </Button>
          )}
        </CardFooter>
      </div>
    </Card>
  );
};

export default PostCard;
