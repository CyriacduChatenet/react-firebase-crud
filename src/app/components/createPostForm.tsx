import { FC, useState } from "react";

import { PostService } from "../../setup/services/post.service";

export const CreatePostForm: FC = () => {
    const [credentials, setCredentials] = useState({
        completed: false,
    });

    const postService = new PostService();

    const handleChange= (e?: any) => {
        const { name, value } = e.target;
        setCredentials({...credentials,[name]: value });
    };

    const handleSubmit = (e? : any) => {
        e.preventDefault();
        postService.create(credentials);
    };
  return (
    <form action="" onSubmit={handleSubmit}>
      <label htmlFor="">
        <span>Name</span>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} />
      </label>
      <label htmlFor="">
        <span>Owner</span>
        <input type="text" name="owner" placeholder="Owner" onChange={handleChange} />
      </label>
      <input type="submit" value="Create post" />
    </form>
  );
};
