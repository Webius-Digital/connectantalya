"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Volume2, VolumeX, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

interface PostProps {
    id: string;
    type: "video" | "image";
    src: string;
    thumbnail: string;
    author: string;
    caption: string;
    views?: number;
    priority?: boolean;
}

export function PostCard({ post }: { post: PostProps }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const isInView = useInView(containerRef, { amount: 0.6 });
    const [isMuted, setIsMuted] = useState(true);
    const [isLiked, setIsLiked] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [viewCount, setViewCount] = useState(post.views || 0);
    const [hasViewed, setHasViewed] = useState(false);

    useEffect(() => {
        if (videoRef.current) {
            if (isInView) {
                videoRef.current.play().catch(() => { });

                // Real-time post-view tracking (skeleton logic)
                if (!hasViewed) {
                    const timer = setTimeout(() => {
                        setViewCount(prev => prev + 1);
                        setHasViewed(true);
                        // In reality, call API here: fetch('/api/posts/view', { method: 'POST', body: { id: post.id } })
                    }, 2000); // 2 seconds view counts as a "view"
                    return () => clearTimeout(timer);
                }
            } else {
                videoRef.current.pause();
            }
        }
    }, [isInView, hasViewed]);

    const handleMediaLoad = useCallback(() => {
        setIsLoading(false);
    }, []);

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full max-w-[480px] aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl group"
        >
            {/* Loading Skeleton & Premium Shimmer */}
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-neutral-900 flex items-center justify-center overflow-hidden"
                    >
                        <div className="w-full h-full relative">
                            <div className="absolute inset-0 bg-neutral-800 animate-pulse" />
                            <div className="absolute inset-x-0 bottom-0 p-8 space-y-4">
                                <div className="w-24 h-4 bg-neutral-700 rounded-full animate-pulse" />
                                <div className="w-full h-3 bg-neutral-700 rounded-full animate-pulse delay-100" />
                                <div className="w-2/3 h-3 bg-neutral-700 rounded-full animate-pulse delay-200" />
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-12 h-12 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Media Layer */}
            {post.type === "video" ? (
                <video
                    ref={videoRef}
                    src={post.src}
                    poster={post.thumbnail}
                    loop
                    muted={isMuted}
                    playsInline
                    preload={post.priority ? "auto" : "metadata"}
                    onLoadedData={handleMediaLoad}
                    className={cn(
                        "w-full h-full object-cover transition-opacity duration-700",
                        isLoading ? "opacity-0" : "opacity-100"
                    )}
                />
            ) : (
                <img
                    src={post.src}
                    alt={post.caption}
                    onLoad={handleMediaLoad}
                    className={cn(
                        "w-full h-full object-cover transition-opacity duration-700",
                        isLoading ? "opacity-0" : "opacity-100"
                    )}
                />
            )}

            {/* Overlay Layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6">
                <div className="flex items-end justify-between">
                    <div className="flex-1 mr-4">
                        <h3 className="text-white font-bold mb-2 flex items-center">
                            <div className="w-8 h-8 rounded-full instagram-gradient mr-3 border-2 border-white/20" />
                            {post.author}
                        </h3>
                        <p className="text-white/90 text-sm line-clamp-2 leading-snug">
                            {post.caption}
                        </p>
                    </div>

                    <div className="flex flex-col items-center space-y-6">
                        <button onClick={() => setIsLiked(!isLiked)} className="group/btn">
                            <Heart className={cn("transition-all scale-110", isLiked ? "text-red-500 fill-red-500" : "text-white")} />
                            <span className="text-[10px] text-white mt-1 font-bold">1.2K</span>
                        </button>
                        <button className="group/btn">
                            <MessageCircle className="text-white scale-110" />
                            <span className="text-[10px] text-white mt-1 font-bold">45</span>
                        </button>
                        <button className="group/btn">
                            <Share2 className="text-white scale-110" />
                            <span className="text-[10px] text-white mt-1 font-bold">88</span>
                        </button>
                        <div className="flex flex-col items-center">
                            <Eye size={22} className="text-white opacity-80" />
                            <span className="text-[10px] text-white mt-1 font-bold">{viewCount}</span>
                        </div>
                        <button onClick={() => setIsMuted(!isMuted)} className="bg-white/10 p-2 rounded-full backdrop-blur-md hover:bg-white/20 transition-colors">
                            {isMuted ? <VolumeX size={18} className="text-white" /> : <Volume2 size={18} className="text-white" />}
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

const mockPosts: PostProps[] = [
    {
        id: "1",
        type: "video",
        src: "https://v1.pinimg.com/videos/mc/720p/f1/63/1c/f1631cda2a3666f0e9b936eb8b71d9d5.mp4",
        thumbnail: "https://images.unsplash.com/photo-1540339832862-47459980783f?q=80&w=1000&auto=format&fit=crop",
        author: "MS Tourism",
        caption: "Antalya'nın kalbinde B2B zirvesine hazır olun. #TravelConnectAntalya #Antalya2026",
        views: 1240,
        priority: true,
    },
    {
        id: "2",
        type: "video",
        src: "https://v1.pinimg.com/videos/mc/720p/60/a4/09/60a409f8c6ebf8b66eeb41f71f980183.mp4",
        thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
        author: "LTC Media",
        caption: "Premium oteller, özel networking geceleri ve yeni iş ortaklıkları. Hepsi burada.",
        views: 890,
    }
];

export function PostFeed() {
    return (
        <div className="flex flex-col items-center space-y-12 py-10">
            {mockPosts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    );
}
