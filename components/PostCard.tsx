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
import { ChevronRight, Clock, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props {
  data: {
    src: string;
    title: string;
    description?: string;
    date?: string;
    views?: number;
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

      <div className="md:mx-5 m-0 mb-3">
        {data.date && (
          <p className=" text-gray-400 flex gap-1 items-center text-left p-5">
            <Clock
              style={{
                width: '18px',
                height: '18px',
              }}
            />
            <span>{data.date}</span>
          </p>
        )}
        <div className="mb-5">
          <CardHeader>
            <CardTitle
              className={cn(
                'text-xl uppercase w-full',
                data.date ? 'font-medium text-left' : '',
              )}
            >
              {data.title}
            </CardTitle>
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
            {data?.views && (
              <div className=" w-fit ms-auto flex items-center justify-end gap-1 text-gray-400 mt-5">
                <Eye />
                <p>{data.views}</p>
              </div>
            )}
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

export default PostCard;
