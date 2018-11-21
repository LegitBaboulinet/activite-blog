import { Post } from './../models/post.model' ;
import { Subject } from 'rxjs';

export class PostService {
    
    private postsSubject = new Subject<Array<Post>>();
    private posts: Array<Post> = [
        new Post('Mon premier post', 'Ceci est un post', new Date(), 11, 10),
        new Post('Mon second post', 'Ceci est un post', new Date(), 10, 11),
        new Post('Mon troisième post', 'Ceci est un post', new Date(), 10, 10),
    ];

    /**
     * Retourne le subject des posts
     */
    public getPostsSubject() {
        return this.postsSubject;
    }

    /**
     * Envoie l'évènement de souscription
     */
    public emitPostSubject() {
        this.postsSubject.next(this.posts.slice());
    }

    /**
     * Ajoute un post
     * @param post : Le post à ajouter
     */
    public addPost(post: Post) {
        this.posts.push(post);
        this.emitPostSubject();
    }

    public findPost(post: Post) {
        for (let i = 0; i < this.posts.length; i++) {
            if (this.posts[i].equals(post)) {
                return i;
            }
        }
        return -1;
    }

    /**
     * Supprime un post s'il existe
     * @param post 
     */
    public deletePost(post: Post) {
        let index = this.findPost(post);
        if (index >= 0) {
            this.posts.splice(index, 1);
        }
        this.emitPostSubject();
    }
}