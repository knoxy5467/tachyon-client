export declare const userSchema: import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    springid: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    name: import("@sinclair/typebox").TString;
    bot: import("@sinclair/typebox").TBoolean;
    clan_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TNull]>;
    country: import("@sinclair/typebox").TString;
    icons: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TAny>;
}>;
export declare const myUserSchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
    id: import("@sinclair/typebox").TNumber;
    springid: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
    name: import("@sinclair/typebox").TString;
    bot: import("@sinclair/typebox").TBoolean;
    clan_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TNull]>;
    country: import("@sinclair/typebox").TString;
    icons: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TAny>;
}>, import("@sinclair/typebox").TObject<{
    friend_requests: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
    friends: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
    permissions: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
}>]>;
export declare const clientSchema: import("@sinclair/typebox").TObject<{
    ready: import("@sinclair/typebox").TBoolean;
    player: import("@sinclair/typebox").TBoolean;
    team_number: import("@sinclair/typebox").TNumber;
    player_number: import("@sinclair/typebox").TNumber;
    team_colour: import("@sinclair/typebox").TString;
    sync: import("@sinclair/typebox").TNumber;
}>;
export declare const playerSchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
    ready: import("@sinclair/typebox").TBoolean;
    player: import("@sinclair/typebox").TBoolean;
    team_number: import("@sinclair/typebox").TNumber;
    player_number: import("@sinclair/typebox").TNumber;
    team_colour: import("@sinclair/typebox").TString;
    sync: import("@sinclair/typebox").TNumber;
}>, import("@sinclair/typebox").TObject<{
    userid: import("@sinclair/typebox").TNumber;
    lobby_id: import("@sinclair/typebox").TNumber;
    away: import("@sinclair/typebox").TBoolean;
    in_game: import("@sinclair/typebox").TBoolean;
}>]>;
export declare const botSchema: import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
    ready: import("@sinclair/typebox").TBoolean;
    player: import("@sinclair/typebox").TBoolean;
    team_number: import("@sinclair/typebox").TNumber;
    player_number: import("@sinclair/typebox").TNumber;
    team_colour: import("@sinclair/typebox").TString;
    sync: import("@sinclair/typebox").TNumber;
}>, import("@sinclair/typebox").TObject<{
    owner_id: import("@sinclair/typebox").TNumber;
    owner_name: import("@sinclair/typebox").TString;
    ai_dll: import("@sinclair/typebox").TString;
    handicap: import("@sinclair/typebox").TNumber;
    side: import("@sinclair/typebox").TNumber;
    name: import("@sinclair/typebox").TString;
}>]>;
export declare const lobbySchema: import("@sinclair/typebox").TObject<{
    bots: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
        ready: import("@sinclair/typebox").TBoolean;
        player: import("@sinclair/typebox").TBoolean;
        team_number: import("@sinclair/typebox").TNumber;
        player_number: import("@sinclair/typebox").TNumber;
        team_colour: import("@sinclair/typebox").TString;
        sync: import("@sinclair/typebox").TNumber;
    }>, import("@sinclair/typebox").TObject<{
        owner_id: import("@sinclair/typebox").TNumber;
        owner_name: import("@sinclair/typebox").TString;
        ai_dll: import("@sinclair/typebox").TString;
        handicap: import("@sinclair/typebox").TNumber;
        side: import("@sinclair/typebox").TNumber;
        name: import("@sinclair/typebox").TString;
    }>]>>;
    disabled_units: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
    engine_name: import("@sinclair/typebox").TString;
    engine_version: import("@sinclair/typebox").TString;
    founder_id: import("@sinclair/typebox").TNumber;
    id: import("@sinclair/typebox").TNumber;
    in_progress: import("@sinclair/typebox").TBoolean;
    ip: import("@sinclair/typebox").TString;
    locked: import("@sinclair/typebox").TBoolean;
    map_hash: import("@sinclair/typebox").TString;
    map_name: import("@sinclair/typebox").TString;
    max_players: import("@sinclair/typebox").TNumber;
    name: import("@sinclair/typebox").TString;
    password: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
    players: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
    started_at: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TNull]>;
    tags: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
    type: import("@sinclair/typebox").TString;
    start_rectangles: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
}>;
export declare const responses: {
    readonly "s.auth.disconnect": import("@sinclair/typebox").TObject<{}>;
    readonly "s.system.server_event": import("@sinclair/typebox").TObject<{
        event: import("@sinclair/typebox").TString;
        node: import("@sinclair/typebox").TString;
    }>;
    readonly "s.system.pong": import("@sinclair/typebox").TObject<{
        time: import("@sinclair/typebox").TNumber;
    }>;
    readonly "s.auth.register": import("@sinclair/typebox").TObject<{
        result: import("@sinclair/typebox").TString;
        reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    readonly "s.auth.get_token": import("@sinclair/typebox").TObject<{
        result: import("@sinclair/typebox").TString;
        token: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    readonly "s.auth.login": import("@sinclair/typebox").TObject<{
        result: import("@sinclair/typebox").TString;
        agreement: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
        user: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            springid: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
            name: import("@sinclair/typebox").TString;
            bot: import("@sinclair/typebox").TBoolean;
            clan_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TNull]>;
            country: import("@sinclair/typebox").TString;
            icons: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TAny>;
        }>, import("@sinclair/typebox").TObject<{
            friend_requests: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            friends: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            permissions: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
        }>]>>;
    }>;
    readonly "s.auth.verify": import("@sinclair/typebox").TObject<{
        result: import("@sinclair/typebox").TString;
        user: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            springid: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
            name: import("@sinclair/typebox").TString;
            bot: import("@sinclair/typebox").TBoolean;
            clan_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TNull]>;
            country: import("@sinclair/typebox").TString;
            icons: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TAny>;
        }>, import("@sinclair/typebox").TObject<{
            friend_requests: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            friends: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            permissions: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
        }>]>>;
        reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    readonly "s.lobby.query": import("@sinclair/typebox").TObject<{
        result: import("@sinclair/typebox").TString;
        lobbies: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            bots: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                ready: import("@sinclair/typebox").TBoolean;
                player: import("@sinclair/typebox").TBoolean;
                team_number: import("@sinclair/typebox").TNumber;
                player_number: import("@sinclair/typebox").TNumber;
                team_colour: import("@sinclair/typebox").TString;
                sync: import("@sinclair/typebox").TNumber;
            }>, import("@sinclair/typebox").TObject<{
                owner_id: import("@sinclair/typebox").TNumber;
                owner_name: import("@sinclair/typebox").TString;
                ai_dll: import("@sinclair/typebox").TString;
                handicap: import("@sinclair/typebox").TNumber;
                side: import("@sinclair/typebox").TNumber;
                name: import("@sinclair/typebox").TString;
            }>]>>;
            disabled_units: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
            engine_name: import("@sinclair/typebox").TString;
            engine_version: import("@sinclair/typebox").TString;
            founder_id: import("@sinclair/typebox").TNumber;
            id: import("@sinclair/typebox").TNumber;
            in_progress: import("@sinclair/typebox").TBoolean;
            ip: import("@sinclair/typebox").TString;
            locked: import("@sinclair/typebox").TBoolean;
            map_hash: import("@sinclair/typebox").TString;
            map_name: import("@sinclair/typebox").TString;
            max_players: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TString;
            password: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
            players: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            started_at: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TNull]>;
            tags: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
            type: import("@sinclair/typebox").TString;
            start_rectangles: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
        }>>;
    }>;
    readonly "s.user.user_and_client_list": import("@sinclair/typebox").TObject<{
        clients: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            ready: import("@sinclair/typebox").TBoolean;
            player: import("@sinclair/typebox").TBoolean;
            team_number: import("@sinclair/typebox").TNumber;
            player_number: import("@sinclair/typebox").TNumber;
            team_colour: import("@sinclair/typebox").TString;
            sync: import("@sinclair/typebox").TNumber;
        }>>;
        users: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TObject<{
            id: import("@sinclair/typebox").TNumber;
            springid: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TString]>;
            name: import("@sinclair/typebox").TString;
            bot: import("@sinclair/typebox").TBoolean;
            clan_id: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TNull]>;
            country: import("@sinclair/typebox").TString;
            icons: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TAny>;
        }>>;
    }>;
    readonly "s.lobby.join": import("@sinclair/typebox").TObject<{
        result: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TLiteral<"waiting_for_host">, import("@sinclair/typebox").TLiteral<"failure">]>;
        reason: import("@sinclair/typebox").TOptional<import("@sinclair/typebox").TString>;
    }>;
    readonly "s.lobby_host.request_to_join": import("@sinclair/typebox").TObject<{
        userid: import("@sinclair/typebox").TNumber;
    }>;
    readonly "s.lobby.join_response": import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        result: import("@sinclair/typebox").TLiteral<"approve">;
        lobby: import("@sinclair/typebox").TObject<{
            bots: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                ready: import("@sinclair/typebox").TBoolean;
                player: import("@sinclair/typebox").TBoolean;
                team_number: import("@sinclair/typebox").TNumber;
                player_number: import("@sinclair/typebox").TNumber;
                team_colour: import("@sinclair/typebox").TString;
                sync: import("@sinclair/typebox").TNumber;
            }>, import("@sinclair/typebox").TObject<{
                owner_id: import("@sinclair/typebox").TNumber;
                owner_name: import("@sinclair/typebox").TString;
                ai_dll: import("@sinclair/typebox").TString;
                handicap: import("@sinclair/typebox").TNumber;
                side: import("@sinclair/typebox").TNumber;
                name: import("@sinclair/typebox").TString;
            }>]>>;
            disabled_units: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
            engine_name: import("@sinclair/typebox").TString;
            engine_version: import("@sinclair/typebox").TString;
            founder_id: import("@sinclair/typebox").TNumber;
            id: import("@sinclair/typebox").TNumber;
            in_progress: import("@sinclair/typebox").TBoolean;
            ip: import("@sinclair/typebox").TString;
            locked: import("@sinclair/typebox").TBoolean;
            map_hash: import("@sinclair/typebox").TString;
            map_name: import("@sinclair/typebox").TString;
            max_players: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TString;
            password: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
            players: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            started_at: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TNull]>;
            tags: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
            type: import("@sinclair/typebox").TString;
            start_rectangles: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        result: import("@sinclair/typebox").TLiteral<"reject">;
        reason: import("@sinclair/typebox").TString;
    }>]>;
    readonly "s.lobby.announce": import("@sinclair/typebox").TObject<{
        lobby_id: import("@sinclair/typebox").TNumber;
        message: import("@sinclair/typebox").TString;
        sender: import("@sinclair/typebox").TNumber;
    }>;
    readonly "s.lobby.updated": import("@sinclair/typebox").TObject<{
        lobby: import("@sinclair/typebox").TObject<{
            bots: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                ready: import("@sinclair/typebox").TBoolean;
                player: import("@sinclair/typebox").TBoolean;
                team_number: import("@sinclair/typebox").TNumber;
                player_number: import("@sinclair/typebox").TNumber;
                team_colour: import("@sinclair/typebox").TString;
                sync: import("@sinclair/typebox").TNumber;
            }>, import("@sinclair/typebox").TObject<{
                owner_id: import("@sinclair/typebox").TNumber;
                owner_name: import("@sinclair/typebox").TString;
                ai_dll: import("@sinclair/typebox").TString;
                handicap: import("@sinclair/typebox").TNumber;
                side: import("@sinclair/typebox").TNumber;
                name: import("@sinclair/typebox").TString;
            }>]>>;
            disabled_units: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
            engine_name: import("@sinclair/typebox").TString;
            engine_version: import("@sinclair/typebox").TString;
            founder_id: import("@sinclair/typebox").TNumber;
            id: import("@sinclair/typebox").TNumber;
            in_progress: import("@sinclair/typebox").TBoolean;
            ip: import("@sinclair/typebox").TString;
            locked: import("@sinclair/typebox").TBoolean;
            map_hash: import("@sinclair/typebox").TString;
            map_name: import("@sinclair/typebox").TString;
            max_players: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TString;
            password: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
            players: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            started_at: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TNull]>;
            tags: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
            type: import("@sinclair/typebox").TString;
            start_rectangles: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
        }>;
    }>;
    readonly "s.lobby.create": import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TObject<{
        result: import("@sinclair/typebox").TLiteral<"success">;
        lobby: import("@sinclair/typebox").TObject<{
            bots: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TIntersect<[import("@sinclair/typebox").TObject<{
                ready: import("@sinclair/typebox").TBoolean;
                player: import("@sinclair/typebox").TBoolean;
                team_number: import("@sinclair/typebox").TNumber;
                player_number: import("@sinclair/typebox").TNumber;
                team_colour: import("@sinclair/typebox").TString;
                sync: import("@sinclair/typebox").TNumber;
            }>, import("@sinclair/typebox").TObject<{
                owner_id: import("@sinclair/typebox").TNumber;
                owner_name: import("@sinclair/typebox").TString;
                ai_dll: import("@sinclair/typebox").TString;
                handicap: import("@sinclair/typebox").TNumber;
                side: import("@sinclair/typebox").TNumber;
                name: import("@sinclair/typebox").TString;
            }>]>>;
            disabled_units: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TString>;
            engine_name: import("@sinclair/typebox").TString;
            engine_version: import("@sinclair/typebox").TString;
            founder_id: import("@sinclair/typebox").TNumber;
            id: import("@sinclair/typebox").TNumber;
            in_progress: import("@sinclair/typebox").TBoolean;
            ip: import("@sinclair/typebox").TString;
            locked: import("@sinclair/typebox").TBoolean;
            map_hash: import("@sinclair/typebox").TString;
            map_name: import("@sinclair/typebox").TString;
            max_players: import("@sinclair/typebox").TNumber;
            name: import("@sinclair/typebox").TString;
            password: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TString, import("@sinclair/typebox").TNull]>;
            players: import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>;
            started_at: import("@sinclair/typebox").TUnion<[import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TNull]>;
            tags: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TString, import("@sinclair/typebox").TString>;
            type: import("@sinclair/typebox").TString;
            start_rectangles: import("@sinclair/typebox").TRecord<import("@sinclair/typebox").TNumber, import("@sinclair/typebox").TArray<import("@sinclair/typebox").TNumber>>;
        }>;
    }>, import("@sinclair/typebox").TObject<{
        result: import("@sinclair/typebox").TLiteral<"failure">;
        reason: import("@sinclair/typebox").TString;
    }>]>;
    readonly "s.lobby.say": import("@sinclair/typebox").TObject<{
        lobby_id: import("@sinclair/typebox").TNumber;
        sender: import("@sinclair/typebox").TNumber;
        message: import("@sinclair/typebox").TString;
    }>;
};
