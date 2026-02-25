const BIOMES = {
    WATER: { 
        id: 'WATER', 
        name: 'Ozean', 
        color: '#4444ff',
        imageSrc: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/75597f3d-cbb2-4ea4-a202-11d5ab9af9a0/dljgpqs-0bd1b07a-69fa-4b78-90f1-2500f93b6da1.png/v1/fill/w_32,h_32,q_80,strp/water_by_ulquiorrasm_dljgpqs-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzIiLCJwYXRoIjoiL2YvNzU1OTdmM2QtY2JiMi00ZWE0LWEyMDItMTFkNWFiOWFmOWEwL2RsamdwcXMtMGJkMWIwN2EtNjlmYS00Yjc4LTkwZjEtMjUwMGY5M2I2ZGExLnBuZyIsIndpZHRoIjoiPD0zMiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.W56mH_mJArRLRJ7vAukwmIMWCCQab9J1mCSA-3Yv9G8', 
        walkable: false,
        clima: {
            CLEAR: { weather: 'Sunny', temp: 18, humidity: 80 },
            CLOUDY: { weather: 'Foggy', temp: 16, humidity: 90 },
            RAIN: { weather: 'Rainy', temp: 14, humidity: 100 },
            STORM: { weather: 'Stormy', temp: 12, humidity: 100 }
        }
    },
    PLAINS: { 
        id: 'PLAINS', 
        name: 'Ebene', 
        color: '#44cc44', 
        imageSrc: [
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/75597f3d-cbb2-4ea4-a202-11d5ab9af9a0/dljezqu-414b8c8a-0fb6-4cd4-bb04-d0948cccdddc.png/v1/fill/w_32,h_32,q_80,strp/plant1_by_ulquiorrasm_dljezqu-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzIiLCJwYXRoIjoiL2YvNzU1OTdmM2QtY2JiMi00ZWE0LWEyMDItMTFkNWFiOWFmOWEwL2RsamV6cXUtNDE0YjhjOGEtMGZiNi00Y2Q0LWJiMDQtZDA5NDhjY2NkZGRjLnBuZyIsIndpZHRoIjoiPD0zMiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.UTmF5WMtEwc6c8gS_il44tJYZTGiAqNc3BDqMlGsTYg',
            'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/75597f3d-cbb2-4ea4-a202-11d5ab9af9a0/dljezqu-11f8fdcb-81e4-40d4-acdd-ad7318c8b516.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi83NTU5N2YzZC1jYmIyLTRlYTQtYTIwMi0xMWQ1YWI5YWY5YTAvZGxqZXpxdS0xMWY4ZmRjYi04MWU0LTQwZDQtYWNkZC1hZDczMThjOGI1MTYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iMeIm7yUNg7gPrViTU-WepSX3y_zjiggUmzODRtQnOI'
        ],
        walkable: true,
        clima: {
            CLEAR: { weather: 'Sunny', temp: 22, humidity: 40 },
            CLOUDY: { weather: 'Overcast', temp: 20, humidity: 60 },
            RAIN: { weather: 'Rainy', temp: 18, humidity: 80 },
            STORM: { weather: 'Heavy Rain', temp: 16, humidity: 95 }
        }
    },
    FOREST: { 
        id: 'FOREST', 
        name: 'Wald', 
        color: '#006600', 
        imageSrc: 'forest_32x32.png', 
        walkable: true,
        clima: {
            CLEAR: { weather: 'Sunny', temp: 16, humidity: 60 },
            CLOUDY: { weather: 'Mist', temp: 14, humidity: 80 },
            RAIN: { weather: 'Drizzle', temp: 12, humidity: 90 },
            STORM: { weather: 'Stormy', temp: 10, humidity: 100 }
        }
    },
    SAND: { 
        id: 'SAND', 
        name: 'Wüste', 
        color: '#eeee88',
        imageSrc: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/75597f3d-cbb2-4ea4-a202-11d5ab9af9a0/dljgp70-5280a709-a6f1-43c4-9a11-53aefd4386fe.png/v1/fill/w_32,h_32,q_80,strp/desert_by_ulquiorrasm_dljgp70-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzIiLCJwYXRoIjoiL2YvNzU1OTdmM2QtY2JiMi00ZWE0LWEyMDItMTFkNWFiOWFmOWEwL2RsamdwNzAtNTI4MGE3MDktYTZmMS00M2M0LTlhMTEtNTNhZWZkNDM4NmZlLnBuZyIsIndpZHRoIjoiPD0zMiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.1PpH03j21ZcJv0-DD3ih1RFVIeAWPKYM_aIlB3zjN5s',
        walkable: true,
        clima: {
            CLEAR: { weather: 'Heatwave', temp: 38, humidity: 10 },
            CLOUDY: { weather: 'Dusty', temp: 34, humidity: 20 },
            RAIN: { weather: 'Light Rain', temp: 30, humidity: 40 },
            STORM: { weather: 'Sandstorm', temp: 28, humidity: 50 }
        }
    },
    MOUNTAIN: { 
        id: 'MOUNTAIN', 
        name: 'Gebirge', 
        color: '#888888',
        imageSrc: 'stone_32x32.png',
        walkable: false,
        clima: {
            CLEAR: { weather: 'Clear', temp: 4, humidity: 20 },
            CLOUDY: { weather: 'Foggy', temp: 0, humidity: 40 },
            RAIN: { weather: 'Sleet', temp: -2, humidity: 60 },
            STORM: { weather: 'Blizzard', temp: -8, humidity: 90 }
        }
    }
};
