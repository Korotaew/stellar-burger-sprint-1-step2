import styles from "./BurgerConstructor.module.css";
import React, {useState} from 'react';
import {Button, ConstructorElement, CurrencyIcon, DragIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../OrderDetails/OrderDetails";
function BurgerConstructor() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openCheck = () => {
      setIsModalOpen(true);
    }
  
    const closeCheck = () => {
      setIsModalOpen(false);
    }

    return (
        <div className={`${styles.builder} ml-95`}>
            <div className={styles.items}>
                <div className={styles.bun}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={200}
                        thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
                    />
                </div>
                <div className={`${styles.list} custom-scroll`}>
                    <div className={styles.ingredients}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Соус традиционный галактический"
                            price={30}
                            thumbnail="https://code.s3.yandex.net/react/code/sauce-03.png"
                        />
                    </div>
                    <div className={styles.ingredients}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Мясо бессмертных моллюсков Protostomia"
                            price={300}
                            thumbnail="https://code.s3.yandex.net/react/code/meat-02.png"
                        />
                    </div>
                    <div className={styles.ingredients}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Плоды Фалленианского дерева"
                            price={80}
                            thumbnail="https://code.s3.yandex.net/react/code/sp_1.png"
                        />
                    </div>
                    <div className={styles.ingredients}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Хрустящие минеральные кольца"
                            price={80}
                            thumbnail="https://code.s3.yandex.net/react/code/mineral_rings.png"
                        />
                    </div>
                    <div className={styles.ingredients}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Хрустящие минеральные кольца"
                            price={80}
                            thumbnail="https://code.s3.yandex.net/react/code/mineral_rings.png"
                        />
                    </div>
                    <div className={styles.ingredients}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Соус традиционный галактический"
                            price={30}
                            thumbnail="https://code.s3.yandex.net/react/code/sauce-03.png"
                        />
                    </div>
                    <div className={styles.ingredients}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Мясо бессмертных моллюсков Protostomia"
                            price={300}
                            thumbnail="https://code.s3.yandex.net/react/code/meat-02.png"
                        />
                    </div>
                    <div className={styles.ingredients}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Плоды Фалленианского дерева"
                            price={80}
                            thumbnail="https://code.s3.yandex.net/react/code/sp_1.png"
                        />
                    </div>
                    <div className={styles.ingredients}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Хрустящие минеральные кольца"
                            price={80}
                            thumbnail="https://code.s3.yandex.net/react/code/mineral_rings.png"
                        />
                    </div>
                    <div className={styles.ingredients}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Хрустящие минеральные кольца"
                            price={80}
                            thumbnail="https://code.s3.yandex.net/react/code/mineral_rings.png"
                        />
                    </div>
                </div>
                <div className={styles.bun}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={200}
                        thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
                    />
                </div>
            </div>
            <div className={`${styles.check} mt-10`}>
                <p className="text text_type_digits-medium mr-2">610</p>
                <CurrencyIcon type="primary"/>
                <Button htmlType="button" type="primary" size="medium" onClick={openCheck}>
                    Оформить заказ
                </Button>
                {isModalOpen && <OrderDetails onClose={closeCheck} />}
            </div>
        </div>
    )
}

export default BurgerConstructor;