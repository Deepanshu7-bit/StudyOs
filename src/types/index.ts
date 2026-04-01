export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: string;
}

export interface Permission {
  resource: string;
  action: string;
}

export interface PermissionsResponse {
  permissions: Permission[];
  permissionsByResource: Record<string, string[]>;
}

export interface ApiError {
  message: string;
  code?: string;
  details?: Record<string, any>;
}
