import {Response, Request} from "express";

class PostsController {
    constructor() {
        console.log('Created instance of PostController')
    }

    getPosts(req: Request, res: Response) {
        res.json({message:'Post route get request'})
        console.log(typeof PostsController);
    }

    createPost(req: Request, res: Response) {
        res.json({message:'Post route post request', body: req.body})
    }

    deletePost(req: Request, res: Response) {
        res.json({message:'Post route delete request'})
    }
}

export default new PostsController()