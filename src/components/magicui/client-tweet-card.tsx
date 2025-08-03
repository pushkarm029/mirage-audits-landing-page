'use client';

import { useEffect, useState } from 'react';
import { getTweet, type Tweet } from 'react-tweet/api';
import { MagicTweet, TweetSkeleton, TweetNotFound } from './tweet-card';

interface ClientTweetCardProps {
  id: string;
  className?: string;
}

export const ClientTweetCard = ({ id, className }: ClientTweetCardProps) => {
  const [tweet, setTweet] = useState<Tweet | null | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchTweet() {
      try {
        setIsLoading(true);
        setError(null);
        const tweetData = await getTweet(id);
        setTweet(tweetData);
      } catch (err) {
        console.error('Error fetching tweet:', err);
        setError(err as Error);
        setTweet(null);
      } finally {
        setIsLoading(false);
      }
    }

    if (id) {
      fetchTweet();
    }
  }, [id]);

  if (isLoading) {
    return <TweetSkeleton className={className} />;
  }

  if (error || !tweet) {
    return <TweetNotFound className={className} />;
  }

  return <MagicTweet tweet={tweet} className={className} />;
};