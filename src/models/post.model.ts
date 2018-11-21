export class Post {
    
    constructor(
        public title: string,
        public content: string,
        public date: Date,
        public likeIts: number,
        public dontLikeIts: number
    ) {}
    
    public equals(post: Post): boolean {
        if (post.title === this.title && post.content === this.content&& post.date === this.date &&
            post.likeIts === this.likeIts && post.dontLikeIts === this.dontLikeIts) {
            return true;
        } else {
            return false;
        }
    }

}