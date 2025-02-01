import React from "react";

export type Player = {
  id: string;
  name: string;
  goals: number;
};

type PlayersContextValue = {
  players: Player[];
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
};

const PlayersContext = React.createContext<PlayersContextValue | null>(null);

export const usePlayers = () => {
  const context = React.useContext(PlayersContext);
  if (context === null)
    throw new Error("useContext deve estar detro do Provider");
  return context;
};

export const PlayersProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [players, setPlayers] = React.useState<Player[]>([]);

  React.useEffect(() => {
    const storedPlayers = localStorage.getItem("players");
    if (storedPlayers) {
      setPlayers(JSON.parse(storedPlayers));
    }
  }, []);

  return (
    <PlayersContext.Provider value={{ players, setPlayers }}>
      {children}
    </PlayersContext.Provider>
  );
};
