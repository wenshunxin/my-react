/**
 * @Date:   2019-10-14T17:12:19+08:00
 * @Last modified time: 2019-10-15T10:56:05+08:00
 */
import * as React from "react";
import { Link } from "react-router"
import { Breadcrumb } from "antd"

// console.log("react-router")
// type BreadcrumbCustomProps = {
//     first?: string;
//     second?: string;
// };
class BreadcrumbCustom extends React.Component{
    render() {
        const first = <Breadcrumb.Item>{this.props.first}</Breadcrumb.Item> || '';
        const second = <Breadcrumb.Item>{this.props.second}</Breadcrumb.Item> || '';
        return (
            <span>
                <Breadcrumb style={{ margin: '12px 0' }}>
                    <Breadcrumb.Item>
                        <Link to={'/home'}>首页</Link>
                    </Breadcrumb.Item>
                    {first}
                    {second}
                </Breadcrumb>
            </span>
        );
    }
}

export default BreadcrumbCustom;
