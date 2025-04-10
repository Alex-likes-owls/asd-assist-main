import styles from "./styles.module.css";

const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-60">
      <span className={styles.loader}></span>
    </div>
  );
};

export default Loading;
