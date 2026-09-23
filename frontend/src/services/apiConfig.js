// Central API base URL - uses production backend on Render, localhost in dev
const BASE_URL = import.meta.env.VITE_API_URL || '';

export default BASE_URL;
