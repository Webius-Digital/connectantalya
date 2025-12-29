"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

interface PostProps {
    id: string;
    type: "video" | "image";
    src: string;
    thumbnail: string;
    author: string;
    caption: string;
}

export function PostCard({ post }: { post: PostProps }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const isInView = useInView(containerRef, { amount: 0.6 });
    const [isMuted, setIsMuted] = useState(true);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        if (videoRef.current) {
            if (isInView) {
                videoRef.current.play().catch(() => { });
            } else {
                videoRef.current.pause();
            }
        }
    }, [isInView]);

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full max-w-[480px] aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl group"
        >
            {/* Media Layer */}
            {post.type === "video" ? (
                <video
                    ref={videoRef}
                    src={post.src}
                    poster={post.thumbnail}
                    loop
                    muted={isMuted}
                    playsInline
                    className="w-full h-full object-cover"
                />
            ) : (
                <img src={post.src} alt={post.caption} className="w-full h-full object-cover" />
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
                        <button onClick={() => setIsMuted(!isMuted)} className="bg-white/10 p-2 rounded-full backdrop-blur-md">
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
        caption: "Antalya'nın kalbinde B2B zirvesine hazır olun. #TravelConnectAntalya #Belek2026",
    },
    {
        id: "2",
        type: "video",
        src: "https://v1.pinimg.com/videos/mc/720p/60/a4/09/60a409f8c6ebf8b66eeb41f71f980183.mp4",
        thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
        author: "LTC Media",
        caption: "Premium oteller, özel networking geceleri ve yeni iş ortaklıkları. Hepsi burada.",
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
