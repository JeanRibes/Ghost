// NOTE: mapping is based on maping present in migration - 3.22/07-update-type-for-settings
const keyTypeMapping = {
    db_hash: 'string',
    admin_session_secret: 'string',
    theme_session_secret: 'string',
    ghost_public_key: 'string',
    ghost_private_key: 'string',
    title: 'string',
    description: 'string',
    logo: 'string',
    cover_image: 'string',
    icon: 'string',
    accent_color: 'string',
    locale: 'string',
    timezone: 'string',
    codeinjection_head: 'string',
    codeinjection_foot: 'string',
    facebook: 'string',
    twitter: 'string',
    meta_title: 'string',
    meta_description: 'string',
    og_image: 'string',
    og_title: 'string',
    og_description: 'string',
    twitter_image: 'string',
    twitter_title: 'string',
    twitter_description: 'string',
    active_theme: 'string',
    password: 'string',
    public_hash: 'string',
    members_public_key: 'string',
    members_private_key: 'string',
    members_email_auth_secret: 'string',
    default_content_visibility: 'string',
    stripe_secret_key: 'string',
    stripe_publishable_key: 'string',
    stripe_connect_publishable_key: 'string',
    stripe_connect_secret_key: 'string',
    stripe_connect_display_name: 'string',
    stripe_connect_account_id: 'string',
    notifications: 'array',
    navigation: 'array',
    secondary_navigation: 'array',
    slack: 'array',
    pleroma: 'array',
    shared_views: 'array',
    portal_plans: 'array',
    stripe_plans: 'array',
    next_update_check: 'number',
    amp: 'boolean',
    is_private: 'boolean',
    members_allow_free_signup: 'boolean',
    portal_name: 'boolean',
    portal_button: 'boolean',
    stripe_connect_livemode: 'boolean',
    labs: 'object',
    unsplash: 'object',
    bulk_email_settings: 'object'
};

const mapKeyToType = (key) => {
    return keyTypeMapping[key];
};

module.exports = mapKeyToType;
