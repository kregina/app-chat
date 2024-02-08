import { useContext } from "react";

import { UserContext } from "@store/contexts";

export const useUser = () => useContext(UserContext);
