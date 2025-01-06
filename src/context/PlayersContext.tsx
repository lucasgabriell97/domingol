import React from "react";

export interface Player {
  id: string;
  name: string;
  goals: number;
}

interface PlayersContextValue {
  players: Player[];
  setPlayers: React.Dispatch<React.SetStateAction<Player[]>>;
}

export const PlayersContext = React.createContext({} as PlayersContextValue);

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
