import classes from "./post.item.module.css";

function PostItem({ post }) {
  return (
    <article className={classes.item}>
      <h1>{post[0].title}</h1>
      <p>{post[0].body}</p>
    </article>
  );
}

export default PostItem;
