import React from 'react'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import { Link } from '@mui/material';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <ul>
                <li className='active'>
                    <Link>
                        <DashboardOutlinedIcon fontSize="large" />
                        <span>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link>
                        <PeopleAltOutlinedIcon fontSize="large" />
                        <span>Clients</span>
                    </Link>
                </li>
                <li>
                    <Link>
                        <WorkOutlineOutlinedIcon fontSize="large" />
                        <span>Jobs</span>
                    </Link>
                </li>
                <li>
                    <Link>
                        <AccountCircleOutlinedIcon fontSize="large" />
                        <span>Candidates</span>
                    </Link>
                </li>
                <li>
                    <Link>
                        <AnalyticsOutlinedIcon fontSize="large" />
                        <span>Analytics</span>
                    </Link>
                </li>
                <li>
                    <Link>
                        <FolderOutlinedIcon fontSize="large" />
                        <span>Folders</span>
                    </Link>
                </li>
                <li>
                    <Link>
                        <AdminPanelSettingsOutlinedIcon fontSize="large" />
                        <span>Admin</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
