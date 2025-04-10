
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  category: string;
  date: string;
  imageUrl: string;
  author: string;
  likes: number;
  shares: number;
  campaignId?: string;
}

interface NewsFeedProps {
  news: NewsItem[];
}

const NewsFeed: React.FC<NewsFeedProps> = ({ news }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-islamic-dark">Latest Updates</h2>
        <Tabs defaultValue="all" className="w-auto">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="news">News</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <TabsContent value="all" className="mt-6 space-y-6">
        {news.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="h-48 md:h-full w-full object-cover"
                />
              </div>
              <div className="md:w-2/3 flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="bg-islamic-secondary/10 text-islamic-dark">
                      {item.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock size={14} className="mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <CardTitle className="mt-2">{item.title}</CardTitle>
                  <CardDescription className="text-sm">{item.author}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
                
                <CardFooter className="flex justify-between border-t pt-4">
                  <div className="flex space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Heart size={14} className="mr-1" />
                      {item.likes}
                    </div>
                    <div className="flex items-center">
                      <Share2 size={14} className="mr-1" />
                      {item.shares}
                    </div>
                  </div>
                  
                  {item.campaignId && (
                    <Button asChild size="sm" variant="outline">
                      <Link to={`/campaigns/${item.campaignId}`}>
                        View Campaign
                      </Link>
                    </Button>
                  )}
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </TabsContent>
      
      <TabsContent value="campaigns" className="mt-6">
        {news.filter(item => item.campaignId).map((item) => (
          <Card key={item.id} className="overflow-hidden mb-6">
            {/* Same structure as above */}
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="h-48 md:h-full w-full object-cover"
                />
              </div>
              <div className="md:w-2/3 flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="bg-islamic-secondary/10 text-islamic-dark">
                      {item.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock size={14} className="mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <CardTitle className="mt-2">{item.title}</CardTitle>
                  <CardDescription className="text-sm">{item.author}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
                
                <CardFooter className="flex justify-between border-t pt-4">
                  <div className="flex space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Heart size={14} className="mr-1" />
                      {item.likes}
                    </div>
                    <div className="flex items-center">
                      <Share2 size={14} className="mr-1" />
                      {item.shares}
                    </div>
                  </div>
                  
                  <Button asChild size="sm" variant="outline">
                    <Link to={`/campaigns/${item.campaignId}`}>
                      View Campaign
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </TabsContent>
      
      <TabsContent value="news" className="mt-6">
        {news.filter(item => !item.campaignId).map((item) => (
          <Card key={item.id} className="overflow-hidden mb-6">
            {/* Same structure as above */}
            <div className="md:flex">
              <div className="md:w-1/3">
                <img 
                  src={item.imageUrl} 
                  alt={item.title}
                  className="h-48 md:h-full w-full object-cover"
                />
              </div>
              <div className="md:w-2/3 flex flex-col">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="bg-islamic-secondary/10 text-islamic-dark">
                      {item.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock size={14} className="mr-1" />
                      {item.date}
                    </div>
                  </div>
                  <CardTitle className="mt-2">{item.title}</CardTitle>
                  <CardDescription className="text-sm">{item.author}</CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
                
                <CardFooter className="flex justify-between border-t pt-4">
                  <div className="flex space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Heart size={14} className="mr-1" />
                      {item.likes}
                    </div>
                    <div className="flex items-center">
                      <Share2 size={14} className="mr-1" />
                      {item.shares}
                    </div>
                  </div>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </TabsContent>
    </div>
  );
};

export default NewsFeed;
