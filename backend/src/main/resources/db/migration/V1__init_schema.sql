CREATE TABLE users (
    id UUID PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    birth_date DATE,
    address TEXT,
    notifications_enabled BOOLEAN DEFAULT true,
    registered_at TIMESTAMP,
    status VARCHAR(50)
);

CREATE TABLE documents (
    id UUID PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    type VARCHAR(50),
    file_url TEXT,
    uploaded_at TIMESTAMP
);

CREATE TABLE reservations (
    id UUID PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP NOT NULL,
    departure_city VARCHAR(100),
    return_city VARCHAR(100),
    vehicle_category VARCHAR(100),
    status VARCHAR(50),
    created_at TIMESTAMP DEFAULT now(),
    updated_at TIMESTAMP
);

CREATE TABLE payments (
    id UUID PRIMARY KEY,
    reservation_id UUID UNIQUE NOT NULL REFERENCES reservations(id) ON DELETE CASCADE,
    amount DECIMAL(10,2),
    status VARCHAR(50),
    stripe_session_id VARCHAR(255),
    paid_at TIMESTAMP
);

CREATE TABLE messages (
    id UUID PRIMARY KEY,
    sender_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    recipient_id UUID,
    content TEXT,
    timestamp TIMESTAMP DEFAULT now(),
    status VARCHAR(50),
    conversation_id UUID
);
